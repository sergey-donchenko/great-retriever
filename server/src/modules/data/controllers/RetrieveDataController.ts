import Promotion from '../../../models/promotion.model';

export class RetrieveDataController {

    /**
     * @desc Execute
     **/
    async execute(request, response, next): Promise<any> {
        try {
            const {limit = 100, offset = 0} = request.query;

            const promotions = await Promotion.aggregate([
                {
                    $facet: {
                        "stage1": [{"$group": {_id: null}}],
                        "stage2": [{"$skip": parseInt(offset, 10)}, {"$limit": parseInt(limit, 10)}]
                    },
                },

                {
                    $unwind: "$stage1"
                },

                {
                    $sort: {pStartDate: -1}
                },

                {
                    $project: {
                        data: "$stage2"
                    }
                }
            ]);

            return response
                .status(200)
                .json(promotions);

        } catch (err) {
            next(err);
        }
    }
}
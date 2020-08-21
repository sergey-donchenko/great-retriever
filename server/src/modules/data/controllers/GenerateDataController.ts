import UserGroup from '../../../models/userGroup.model';
import Promotion, {PromotionType} from '../../../models/promotion.model';
import faker from 'faker';

/**
 * @desc Generates random index
 * @return number
 **/
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

export class GenerateDataController {

    /**
     * @desc Execute
     **/
    async execute(request, response, next): Promise<any> {
        try {
            //1. Generate the user groups
            const userGroups = await UserGroup.insertMany(
                new Array(5)
                    // @ts-ignore
                    .fill()
                    .map(() => ({name: faker.name.jobTitle()}))
            );

            // 2. Generate promotions list
            const pTypes = [
                PromotionType.basic,
                PromotionType.common,
                PromotionType.epic
            ];

            const promotions = await Promotion.insertMany(
                new Array(10000)
                    // @ts-ignore
                    .fill()
                    .map(() => ({
                        pName: faker.name.title(),
                        pType: pTypes[Math.floor(Math.random() * pTypes.length)],
                        pStartDate: faker.date.past(),
                        pEndDate: faker.date.future(),
                        pUserGroupName: userGroups[getRandomIndex(userGroups)]['_id']
                    }))
            );


            return response
                .status(200)
                .json({
                    data: userGroups,
                    promotions
                });

        } catch (err) {
            next(err);
        }
    }
}
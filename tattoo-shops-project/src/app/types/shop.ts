import {Owner} from './owner'

export interface Shop {
    "_id": string,
    "name": string,
    "imageUrl": string,
    "ownerId": Owner,
    "__v": number
}
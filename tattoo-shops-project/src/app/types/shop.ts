import {Owner} from './owner'

export interface Shop {
    "_id": string,
    "name": string,
    "imageUrl": string,
    "owner": Owner,
    "__v": number
}
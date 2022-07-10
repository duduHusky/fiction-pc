import Mock from "mockjs";
import { createBook, createUpdate } from "./data";

const mockData = Mock.mock({
    bookInfo: createBook(),
    chapterInfo: createUpdate()
})

export default [
    {
        url: RegExp('/api/book/chapter.*'),
        type: 'get',
        response: () => {
            return {
                code: 0,
                data: mockData
            }
        }
    }
]
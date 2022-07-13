import Mock from "mockjs";
import { createBook, createChapter } from "./data";

const mockData = Mock.mock({
    bookInfo: createBook(),
    chapterInfo: createChapter()
})

const mockBookInfoData = Mock.mock({
    ...createBook(),
})

const mockChapterListData = Mock.mock({
    'chapterList|10-200': [
        createChapter
    ]
})

export default [
    {
        url: RegExp('/api/book/chapter/.*'),
        type: 'get',
        response: () => {
            return {
                code: 0,
                data: mockData
            }
        }
    },
    {
        url: RegExp('/api/book/info/.*'),
        type: 'get',
        response: () => {
            return {
                code: 0,
                data: mockBookInfoData
            }
        }
    },
    {
        url: RegExp('/api/book/chapter-list/.*'),
        type: 'get',
        response: () => {
            return {
                code: 0,
                data: mockChapterListData["chapterList"]
            }
        }
    },
]
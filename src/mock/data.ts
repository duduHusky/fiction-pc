import Mock from "mockjs";
import { AuthorState, BookState, CategoryState, ChapterState } from "../service/serviceInterface";

const Random = Mock.Random

export function createAuthor(): AuthorState {
    return {
        book_count: Random.integer(0, 99),
        created_at: Random.datetime("yyyy-MM-dd HH:mm:ss"),
        name: Random.cname(),
        title: Random.ctitle(2, 7),
        uuid: Random.id()
    }
}

export function createCategory(): CategoryState {
    return {
        bookCount: 0,
        created_at: Random.datetime("yyyy-MM-dd HH:mm:ss"),
        title: Random.ctitle(2, 7),
        uuid: Random.id()
    }
}

export function createUpdate(): ChapterState {
    return {
        uuid: Random.id(),
        created_at: Random.datetime("yyyy-MM-dd HH:mm:ss"),
        title: Random.ctitle(2, 7),
        content: Random.cparagraph(800, 1000),
        prev_id: Random.id(),
        next_id: Random.id()
    }
}

export function createBook(): BookState {
    return {
        author: createAuthor(),
        book_status: 0,
        category: createCategory(),
        click_count: Random.integer(0, 999),
        collect_count: Random.integer(0, 999),
        cover_image: Random.image('80x112', '#ccc', '#FFF', '封面图片'),
        created_at: Random.datetime("yyyy-MM-dd HH:mm:ss"),
        description: Random.cparagraph(),
        last_update_time: Random.datetime("yyyy-MM-dd HH:mm:ss"),
        rate: Random.integer(0, 999),
        rate_people_count: Random.integer(0, 999),
        recommend_count: Random.integer(0, 999),
        title: Random.ctitle(2, 7),
        update: createUpdate(),
        uuid: Random.id()
    }
}
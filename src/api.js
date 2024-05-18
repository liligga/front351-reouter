import axios from "axios";

const dummyAPI = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// CRUD - Create, Read, Update, Delete
// Read - GET - получение данных
// GET "https://dummyjson.com/posts"
export const getPosts = async () => {
    const response = await dummyAPI.get("/posts")
    console.log(response.data)
    return response
}

// GET "https://dummyjson.com/posts/3"
const getSinglePost = async (id) => {
    const response = await dummyAPI.get("/posts/" + id)
    console.log(response.data)
    return response
}

// Create - POST - создание данных
// POST "https://dummyjson.com/posts/add"
const createPost = async ({ title, body, userId }) => {
    const response = await dummyAPI.post("/posts/add", {
        title: title,
        body: body,
        userId: userId
    })
    console.log(response.data)
    return response
}
// const newPost = await createPost({ title: "test", body: "test", userId: 1 })

// Update - PUT - обновление данных
// PUT "https://dummyjson.com/posts/5"
const updatePost = async (postId, title) => {
    const response = await dummyAPI.put("/posts/" + postId, {
        title: title
    })
    console.log(response.data)
    return response
}
// const changedPost = await updatePost(5, "test")

// Delete - DELETE - удаление данных
// DELETE "https://dummyjson.com/posts/10"
const deletePost = async (postId) => {
    const response = await dummyAPI.delete("/posts/" + postId)
    console.log(response.data)
}
// const deletedPost = await deletePost(10)
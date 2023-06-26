const apiConstants = {
    BASE_URL: 'https://quizapp.ayssoft.com/api/v1/',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',

    // Categories
    CreateCategory: 'categories/createCategory',
    GetAllCategories: 'categories/getAllCategories',
    GetCategoryById: 'categories/getCategoryById',
    UpdateCategory: 'categories/updateCategory',
    DeleteCategory: 'categories/deleteCategory',
    GetTopicByCategoryId: 'categories/getTopicsByCategoryId',

    CreateTopic: 'topics/createTopic',
    DeleteTopic: 'topics/deleteTopic',
    UpdateTopic: 'topics/updateTopic'
};

export default apiConstants;

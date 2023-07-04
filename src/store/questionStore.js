import { defineStore } from 'pinia';
import NetworkManager from '@/core/NetworkManager';
import ApiConstants from '@/core/ApiConstants';
import { toast } from 'vue3-toastify';

const useQuestionStore = defineStore('question', {
    state: () => ({
        topicId: null,
        categoryId: null,
        questions: [],
        topicList: [],
        createDialog: false
    }),

    actions: {
        async getQuestionByTopic() {
            if (this.topicId !== null) {
                const response = await NetworkManager.get(ApiConstants.GetQuestionByTopic + '?id=' + this.topicId);
                if (response.status === 200) {
                    this.questions = response.data.data;
                    toast.success('Sorular başarıyla getirildi.');
                }
            }
        },
        async getTopicList() {
            const response = await NetworkManager.get(ApiConstants.GetTopicByCategoryId + '?id=' + this.categoryId);
            if (response.status === 200) {
                this.topicList = response.data.data;
            }
        }
    }
});

export default useQuestionStore;

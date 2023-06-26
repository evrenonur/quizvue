import { defineStore } from 'pinia';
import NetworkManager from '@/core/NetworkManager';
import ApiConstants from '@/core/ApiConstants';
import { toast } from 'vue3-toastify';

const useQuestionStore = defineStore('question', {
    state: () => ({
        topicId: null,
        questions: []
    }),

    actions: {
        async getQuestionByTopic() {
            console.log('getQuestionByTopic')
            const response = await NetworkManager.get(ApiConstants.GetQuestionByTopic + '?id=' + this.topicId);
            if (response.status === 200) {
                this.questions = response.data;
                toast.success('Sorular başarıyla getirildi.');
            }
        }
    }
});

export default useQuestionStore;

// 定义mixin对象  
const myMixin = {  
    data() {  
        // 注意这里返回的是一个对象  
        return {  
            // 这里可以定义mixin中共享的响应式数据  
            mixinData: '这是mixin中的数据'  
        };  
    },  
    methods: {  
        mixinMethod() {  
            console.log('这是mixin中的方法');  
        }  
    },  
    created() {  
        // 在组件创建时调用  
        console.log('mixin的created钩子被调用');  
    }  
};  
  
// 暴露出去  
export default myMixin;
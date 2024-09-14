import {v4} from 'uuid';

class AddPostModel {
  state = {
    id: v4(), // or u can use  new Date().getTime()
    date: new Date(),
    title: '',
    text: '',
    user: '',
  };
}
export default AddPostModel;

// MVC de kullanacagımız state nin modeli Model componentimizde tutulur
// Burda biz state yönetimi için class component kullandık

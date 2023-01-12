import HomePage from './src/components/HomePage';
import SignUp from './src/components/SignUp';
import {createRouter, createWebHistory} from 'vue-router';
import AddRestaurant from './src/components/AddRestaurant';
import UpdateRestaurant from './src/components/UpdateRestaurant';
import LogIn from './src/components/LogIn';

const routes = [
  {
    name: 'HomePage',
    component: HomePage, 
    path: '/home'
  },
  {
    name: 'SignUp',
    component: SignUp, 
    path: '/sign-up'
  },
  {
    name: 'LogIn',
    component: LogIn,
    path: '/login'
  },
  {
    name: 'AddRestaurant',
    component: AddRestaurant,
    path: '/add-restaurant'
  },
  {
    name: 'UpdateRestaurant',
    component: UpdateRestaurant,
    path: '/update/:id'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
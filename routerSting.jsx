import Login from '../view/Login'
import Home from '../view/Home'
import Manage from '../view/manage'
import ClassRoom from '../view/classRoom'
import Student from '../view/student'

const routes = [{
    path:'/',
    redirect:'/login'
},{
    path:'/login',
    component:Login,

},
{
 path:'/home',
 component:Home,
 children:[
     {
         path:'/home/manage',
         component:Manage
     },
     {
        path:'/home/classRoom',
        component:ClassRoom
    },
    {
        path:'/home/Student',
        component:Student
    }
 ]
}
]

export default routes
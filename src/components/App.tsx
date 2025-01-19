import React, { useState } from 'react'
import './App.scss'
import { Link, Outlet } from 'react-router-dom'
import PizzaJpg from '@/assets/pizza-svgrepo-com.jpg'
import PizzaPng from '@/assets/pizza-svgrepo-com.png'
import PizzaSvg from '@/assets/pizza-svgrepo-com.svg'

export default function App() {

  if(__PLATFORM__ === 'desktop'){
    console.log(__PLATFORM__)
  }

  if(__PLATFORM__ === 'mobile'){
    console.log(__PLATFORM__)
  }

  const [count, setCount] = useState<number>(0)
  const increment = () => setCount(prev => prev + 1)

  type Name = 'Артем' | 'Настя' | 'Оля' | 'Валя' | 'Рома'

  interface Student {
    name: Name
  }

  let group: Student = {
    name: 'Артем'
  }

  console.log(group.name)

  // interface User {
  //   id: number, // обязательные 
  //   name: string, // свойства
  //   age?: number, // необязательное свойство
  //   readonly email: string, // только для чтения
  //   say(words: string): void // метод (функция) 
  // }

  // class Chelik implements User {
  //   id: number
  //   name: string
  //   age?: number
  //   email: string
  //   say(words: string): void // метод (функция) 
  //   {
  //     throw new Error('Method not implemented.')
  //   }

  //   constructor(userId: number, userName: string, userEmail: string){
  //     this.id = userId,
  //     this.name = userName,
  //     this.email = userEmail
  //   }

  //   login(): string{
  //     return this.name + " " + this.email
  //   }
  // }

  // let people = new Chelik(123, 'Виталик', 'ruchka_nojka@mail.ru')
  // console.log(people)

  // interface User2 extends User {
  //   move(): void
  // }

  // let people: User2 = {
  //   move: function (): void {
  //     throw new Error('Function not implemented.')
  //   },
  //   id: 0,
  //   name: '',
  //   email: '',
  //   say: function (words: string): void // метод (функция) 
  //   {
  //     throw new Error('Function not implemented.')
  //   }
  // }

  // let empty: User = {
  //   id: 123,
  //   name: 'Иван',
  //   age: 34,
  //   email: 'pupoksobaki@mail.ru',
  //   say(words: string) {
  //     console.log(words)
  //   },
  // }

  // empty.say('Привет, Андрей !')

  // console.log('id: ', empty.id)
  // console.log('name: ', empty.name)
  // console.log('age: ', empty.age)

  return (
    <div>
      <img src={PizzaJpg} alt="" />
      <img src={PizzaPng} alt="" />
      {/* <img className='icon' src={PizzaSvg} alt="" /> */}
      <PizzaSvg className='icon'/>
      <h3 className='text'>{count}</h3>
      <button onClick={increment} className='btn'>Кнопка</button>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <Outlet/>
    </div>
  )
}

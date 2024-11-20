// 定義一個介面，用來描述 Person 物件的資料結構
export interface PersonInter {
  id: string,
  name: string,
  age: number
  x?: number // 可選屬性
}

// 一個字定義一個介面，用來描述 Person 物件的資料結構
// 一般寫法
// export type Persons = Array<PersonInter>
// 簡寫寫法
export type Persons = PersonInter[]
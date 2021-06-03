import React,{useEffect, useState} from 'react'

export const SearchPanel = ({param,setParam}) => {
  
//   setParam(Object.assign({},param,{name:evt.target.value}))
  const [users,setUsers]=useState([]);
  return(
      <form action="">
          <div>
              <input type="text" value={param.name} onChange={evt=>setParam({...param,name:evt.target.value})}/>
              <select name="" id="" value={param.personId} onChange={evt=>setParam({
                  ...param,
                  personId:evt.target.value
              })}>
              <option value={''}></option>
              {
                  users.map(user=><option value={user.id}>{user.name}</option>)
              }
              

              </select>
          </div>
      </form>
  )
}

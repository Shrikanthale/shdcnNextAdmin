"use client"
import Registerpage from "@/components/ui/registerpage";
import { trpc } from "@/server/client";
import { Trash2 } from "lucide-react";
import { useState } from "react";
export default function Home() {
  
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
  const getUsers = trpc.user.getUsers.useQuery()
  const addUser = trpc.user.addUser.useMutation({
    onSettled: () => {
      getUsers.refetch()
    }
  })
  const submitUser = () => {
    addUser.mutate({ name, surname })
    setName("")
    setSurname("")
  }
  const deleteUser = trpc.user.deleteUser.useMutation({
    onSettled: () => {
      getUsers.refetch()
    }
  })
  return (
   <>
   {/* <Registerpage /> */}
   <div className="flex min-h-screen flex-col items-center justify-between p-14">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {getUsers.data?.map((user) => (
         <div 
           key={user.name} 
           className="p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
         >
           <div className="text-center flex flex-col justify-between items-center space-y-2 ">
             <h1 className="text-2xl font-bold capitalize">{user.name}</h1>
             <p className="text-xl text-gray-600 capitalize">{user.surname}</p>
             <button onClick={() => deleteUser.mutate({ id: user.id })} className="bg-red-500 text-white p-2 rounded-md flex items-center gap-2">
               <Trash2 className="" />
             </button>
           </div>
         </div>
       ))}
     </div>

     <div className="flex flex-col items-center justify-center">
      <input type="text" placeholder="Name" className="p-2 rounded-md border border-gray-300" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input type="text" placeholder="Surname" className="p-2 rounded-md border border-gray-300" value={surname} onChange={(e) => setSurname(e.target.value)} /> <br />
      <button onClick={submitUser}>Add User</button>
     </div>
   </div>
   </>
  );
}


"use client"
import Registerpage from "@/components/ui/registerpage";
import { trpc } from "@/server/client";
export default function Home() {
  const getUsers = trpc.user.getUsers.useQuery()
  return (
   <>
   {/* <Registerpage /> */}
   <div className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {getUsers.data?.map((user) => (
         <div 
           key={user.name} 
           className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
         >
           <div className="text-center space-y-2">
             <h1 className="text-2xl font-bold capitalize">{user.name}</h1>
             <p className="text-xl text-gray-600 capitalize">{user.surname}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
   </>
  );
}


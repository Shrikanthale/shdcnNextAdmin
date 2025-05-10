"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Registerpage() {
  const router = useRouter()
const session = useSession()
console.log(session)
  const handleSignIn = () => {
    router.push('/dashboard')
    // signIn("google")
  }
  const loginwithgoogle = () => {
    signIn("google")
  }
  // if(session.status === "authenticated"){
  //   router.push('/dashboard')
  // }
  if(session.status === "loading"){
    return <div>Loading...</div>
  }
  if(session.status === "unauthenticated"){
    return <div>unauthenticated</div>
  }

  const handleSignUp = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account" className="cursor-pointer">sign in</TabsTrigger>
          <TabsTrigger value="password" className="cursor-pointer">sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Sign in to your account here. Click sign in when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">username</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">password</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent> 
            <CardFooter>
              <div className="flex justify-center gap-2">
                <Button className="cursor-pointer" onClick={handleSignIn}>sign in</Button>
                <Button className="cursor-pointer" onClick={loginwithgoogle}>log in with google</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>sign up</CardTitle>
              <CardDescription>
                Create an account here. After saving, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">username</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="cursor-pointer" onClick={handleSignUp}>sign up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function index() {
  return (
    <div
      className="container w-96 items-center justify-center h-screen	" 
    >
      <h3 className="text-2xl text-center" style={{ color: "white" }}>
        Welcome back! <br />
        Login.
      </h3>
      <br />
      <Card style={{ backgroundColor: "black", border: "none" }}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl" style={{ color: "white" }}>
            Create an account
          </CardTitle>
          <CardDescription style={{ color: "white" }}>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" style={{ color: "white" }}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="bg-black border-slate-800"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" style={{ color: "white" }}>
              Password
            </Label>
            <Input id="password" type="password" className="border-slate-800 bg-black"/>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-white text-black">Create account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

package main

import (
	"firebase-admin-service/controller"
	"fmt"
)

func main() {
	fmt.Print("Hello World")
	controller := controller.NewUserController()
}
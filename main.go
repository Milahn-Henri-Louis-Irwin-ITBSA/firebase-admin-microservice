package main

import (
	"context"
	"fmt"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"
)

func main() {
	opt := option.WithCredentialsFile("../itbsa-honours-backend-firebase-adminsdk-taci1-f6ac4b2b90.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(app)
}
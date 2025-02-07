package main

import (
	"context"
	"fmt"
	"log"
	"my-grpc-project/gen"
	"os"

	"google.golang.org/grpc"
)

func main() {
	// Dial the gRPC server at localhost:50051
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	// Create a new Greeter client
	c := gen.NewGreeterClient(conn)

	// Get the name argument from command-line input
	name := "World"
	if len(os.Args) > 1 {
		name = os.Args[1]
	}

	// Call the SayHello method on the server
	req := &gen.HelloRequest{Name: name}
	res, err := c.SayHello(context.Background(), req)
	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}

	// Print the response message
	fmt.Println(res.GetMessage())
}

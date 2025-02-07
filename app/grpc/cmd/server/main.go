package main

import (
	"context"
	"fmt"
	"log"
	"my-grpc-project/gen"
	"net"

	"google.golang.org/grpc"
)

// Implement the Greeter service defined in helloworld.proto
type server struct {
	gen.UnimplementedGreeterServer
}

func (s *server) SayHello(ctx context.Context, req *gen.HelloRequest) (*gen.HelloReply, error) {
	return &gen.HelloReply{Message: "Hello, " + req.Name}, nil
}

func main() {
	// Create a TCP listener on port 50051
	listen, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// Create a new gRPC server
	s := grpc.NewServer()
	// Register the Greeter service with the server
	gen.RegisterGreeterServer(s, &server{})

	fmt.Println("gRPC server listening on port 50051...")
	if err := s.Serve(listen); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
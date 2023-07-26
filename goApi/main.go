package main

import (
	"go-api/controllers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CORS(c *gin.Context) {

	// First, we add the headers with need to enable CORS
	// Make sure to adjust these headers to your needs
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "*")
	c.Header("Access-Control-Allow-Headers", "*")
	c.Header("Content-Type", "application/json")

	// Second, we handle the OPTIONS problem
	if c.Request.Method != "OPTIONS" {

		c.Next()

	} else {

		// Everytime we receive an OPTIONS request,
		// we just return an HTTP 200 Status Code
		// Like this, Angular can now do the real
		// request using any other method than OPTIONS
		c.AbortWithStatus(http.StatusOK)
	}
}

func main() {
	router := gin.Default()

	// Cors fix
	router.Use(CORS)

	router.GET("/Jobs", controllers.GetJobs)
	router.GET("/Jobs/:id", controllers.GetJob)
	router.PATCH("/Jobs/:id", controllers.ModifyJob)
	router.POST("/Jobs", controllers.AddJob)

	router.Run("localhost:9090")
}

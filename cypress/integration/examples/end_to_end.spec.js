context("Descripcion de pruebas", () =>{

   
    it("Descripcion de prueba especifica" , () =>{
        cy.visit("http://localhost:8080/")
        cy.get(".router").click()
        cy.get("#nombrePokemon").type("lucario")
        cy.get("#datosPokemon").type("pokemon favorito de ash en la serie pokemon")
        cy.get("#boton").click()
        cy.scrollTo(0,600)
  
        
       
        
    })

})
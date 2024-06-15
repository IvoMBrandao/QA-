describe('Página de login', () => {

    beforeEach(() =>{
      cy.visit('http://127.0.0.1:5500/login.html')
    
    })
    
    
      it('T001-Deve realizar o teste de ponta a ponta', () => {
    
        cy.login('admin@admin.com','admin@123');
        cy.modal();
        const date = '20010101'; 
        const formattedDate = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;

        cy.get('input[type="date"]').type(formattedDate);
    
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#quantidade').type('1234');
        cy.get('#valor').type('1234');
        cy.get('#data').type(formattedDate);
        cy.get('#btn-salvar').click();

        cy.get('#mensagem').should('not.be.visible');

        cy.get('#btn-sair').click();




      })
    

    
      })

    
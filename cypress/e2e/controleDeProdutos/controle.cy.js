describe('Página de Controle', () => {

    beforeEach(() =>{
      cy.visit('http://127.0.0.1:5500/produtos.html?teste=123')
    
    })
        
      it('T001-Teste se o botão voltar sai da aplicação', () => {
    
        cy.get('.nav-link').click();
        cy.contains('login.').should('be.visible');
       
        

      })
    
      it('T002-Teste se o botão Controle de Produtos recarrega a pagina', () => {
    
        cy.get('.navbar-brand').click();
     
    
      })

      //INICIO DO TESTE DO MODAL

      it('T003-Teste se o botão de Criar abre o modal de 1°.', () => {
    
        cy.get('#btn-adicionar').click();
        cy.contains('Produto').should('be.visible')
    
      })

      it('T004-Teste se o botão de Criar abre o modal de 2°.', () => {
    
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
        cy.contains('Produto').should('be.visible')
    
    
      })


      it('T006-Prencher o Modal c/ apenas 1 campo do modal.', () => {
    
        cy.get('#codigo').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('mensagem').should('be.visible')
    
      })

      it('T007-Prencher o Modal c/ apenas 2 campos do modal.', () => {
    
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('mensagem').should('be.visible')
    
      })

      it('T008-Prencher o Modal c/ apenas 3 campos do modal.', () => {
    
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#quantidade').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('mensagem').should('be.visible')
    
      })

      it('T009-Prencher o Modal c/ apenas 4 campos do modal.', () => {
    
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#quantidade').type('1234');
        cy.get('#valor').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('mensagem').should('be.visible')
    
      })

      it('T010- Prencher todo o Modal.', () => {
    
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#quantidade').type('1234');
        cy.get('#valor').type('1234');
        cy.get('#data').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('mensagem').should('be.visible')
    
      })

      //FIM DO TESTE DO MODAL
   

    })
    
    
    
    
    
describe('Página de Controle', () => {

    beforeEach(() =>{
      cy.visit('http://127.0.0.1:5500/produtos.html?teste=123')
    
    })
        
      it('T001-Teste o botão voltar sai da aplicação?', () => {
    
        cy.get('.nav-link').click();
        cy.contains('login.').should('be.visible')
      
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
    
        cy.get('#btn-criar').click();
        cy.contains('login.').should('be.visible')
    
    
      })
      
      it('T005-Prencher o Modal c/ apenas 1 campo do modal.', () => {
        cy.modal();
        cy.get('#codigo').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')
    
      })

      it('T006-Prencher o Modal c/ apenas 2 campos do modal.', () => {
        cy.modal();
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')
    
      })

      it('T007-Prencher o Modal c/ apenas 3 campos do modal.', () => {
    
        cy.modal();
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#quantidade').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')
    
      })

      it('T008-Prencher o Modal c/ apenas 4 campos do modal.', () => {
        cy.modal();
        cy.get('#codigo').type('1234');
        cy.get('#nome').type('1234');
        cy.get('#quantidade').type('1234');
        cy.get('#valor').type('1234');
        cy.get('#btn-salvar').click();
        cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')
    
      })

      it('T009- Prencher todo o Modal.', () => {
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
    });

    })
    
    
    
    
    
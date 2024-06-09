describe('Página de login', () => {

    beforeEach(() =>{
        cy.visit('http://127.0.0.1:5500/login.html')
    })

    it('T001-Teste de login com email errado contendo primeira letra maiúsculas e senha vazia', () => {
        cy.get('#email').type('Email@teste.com');
        cy.get('#btn-entrar').click();
        cy.contains('Informe usuário e senha, os campos não podem ser brancos.').should('be.visible')
      })
  
      
      it('T002-Teste de login com email vazio e senha vazia', () => {
        cy.get('#btn-entrar').click();
        cy.contains('Informe usuário e senha, os campos não podem ser brancos.').should('be.visible')
      })
  
      
      it('T003-Teste de login com email vazio e senha incorreta contendo apenas números', () => {
        cy.get('#senha').type('1234');
        cy.get('#btn-entrar').click();
        cy.contains('Informe usuário e senha, os campos não podem ser brancos.').should('be.visible')
      })
  
      it('T004-Teste de login com email errado contendo primeira letra maiúsculas e senha incorreta contendo apenas números', () => {
        cy.get('#email').type('Email@teste.com');
        cy.get('#senha').type('1234');
        cy.get('#btn-entrar').click();
        cy.contains('E-mail ou senha inválidos').should('be.visible')
      })
      
      it('T005-Teste de login com email correto e senha vazia', () => {
        cy.get('#email').type('admin@admin.com');
        cy.get('#btn-entrar').click();
        cy.contains('Informe usuário e senha, os campos não podem ser brancos.').should('be.visible')
      })


    it('T006-Teste de login com email vazio e senha correta', () => {
      cy.get('#senha').type('admin@123');
      cy.get('#btn-entrar').click();
      cy.contains('Informe usuário e senha, os campos não podem ser brancos.').should('be.visible')
    })

  
      it('T007-Teste de login com email correto e senha incorreta contendo apenas números', () => {
        cy.get('#email').type('admin@admin.com');
        cy.get('#senha').type('123');
        cy.get('#btn-entrar').click();
        cy.contains('E-mail ou senha inválidos').should('be.visible')
      })

        it('T008-Teste de login com email errado contendo primeira letra maiúsculas e senha correta', () => {
            cy.get('#email').type('Admi@admin.com');
            cy.get('#senha').type('admin@123');
            cy.get('#btn-entrar').click();
            cy.contains('E-mail ou senha inválidos').should('be.visible')
      })

      
      it('T009-Teste de login com email correto e senha incorreta, contendo letras maiúculas.Mas números e caracteres especiais continuam de forma correta', () => {
        cy.get('#email').type('admin@admin.com');
        cy.get('#senha').type('ADMIN@123');
        cy.get('#btn-entrar').click();
        cy.contains('E-mail ou senha inválidos').should('be.visible')
      })

  }) 
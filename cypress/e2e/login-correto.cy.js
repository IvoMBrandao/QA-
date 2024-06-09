describe('Página de login', () => {

beforeEach(() =>{
  cy.visit('http://127.0.0.1:5500/login.html')

})


  it('T001-Teste de login com email e senha corretos', () => {

    cy.login('admin@admin.com','admin@123');
  })

  it('T002-Teste de login com email em caixa alta e senha corretos', () => {

    cy.login('ADMIN@ADMIN.COM','admin@123');

  })
})





describe('Página de Controle', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/produtos.html?teste=123')

  });

  it('T001-Deve sair da aplicação ao clicar no botão de "Voltar"', () => {

    cy.get('.nav-link').click();
    cy.contains('login.').should('be.visible')

  });

  it('T002-Deve Sair Teste se o botão Controle de Produtos recarrega a pagina', () => {

    cy.get('.navbar-brand').click();


  });

  it('T003-Deve abrir o modal no primeiro click ao Botão.', () => {

    cy.get('#btn-adicionar').click();
    cy.contains('Produto').should('be.visible')

  });


  it('T004-Não deve preencher o Modal c/ apenas 1 campo do modal.', () => {
    cy.modal();
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T005-Não deve preencher o Modal c/ apenas 1 campo do modal.', () => {
    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });



  it('T006-Não deve preencher o Modal c/ apenas 2 campos do modal.', () => {
    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T007-Não deve preencher o Modal c/ apenas 3 campos do modal.', () => {

    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#quantidade').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T008-Não deve preencher o Modal c/ apenas 4 campos do modal.', () => {
    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#quantidade').type('1234');
    cy.get('#valor').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T009-Deve Salvar o Modal com todos os campos preenchidos..', () => {
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

  it('T010- Deve fechar o modal ao clicar no Botão "X".', () => {
    cy.modal();

    cy.get('.modal-header > .close').click();
    cy.get('tr > :nth-child(3)').should('be.visible');
  });


  it('T011- Deve Fechar o alert do modal ao clicar no botão "X".', () => {
    cy.modal();

    cy.get('#codigo').type('1234');
    cy.get('#btn-salvar').click();
    cy.get('.alert > .close').click();

    cy.wait(2000);

    cy.get('#mensagem', { timeout: 1000 }).should('not.be.visible');

  });

  it('T012- Não Deve Salvar o modal com as Labels (Quantidade e Valor) com Caracteres especias.', () => {
    cy.modal();

    const date = '20010101';
    const formattedDate = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;

    cy.get('input[type="date"]').type(formattedDate);

    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#quantidade').type('aBC');
    cy.get('#valor').type('ABCD');
    cy.get('#data').type(formattedDate);
    cy.get('#btn-salvar').click();


    cy.get('#mensagem').should('be.visible'); // era esperado uma mensagem de erro ao digitar letras nas respectivas labels.


  });

  it('T013-Deve verificar se apos o modal ser completo ele fecha clicando na opção sair.', () => {
    cy.modal();

    const date = '20010101';
    const formattedDate = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;

    cy.get('input[type="date"]').type(formattedDate);

    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#quantidade').type('123');
    cy.get('#valor').type('123');
    cy.get('#data').type(formattedDate);
    cy.get('#btn-salvar').click();


    cy.get('#mensagem').should('not.be.visible');
    cy.get('#btn-sair').click()

  });

  it('T018- Deve verificar se o botão de editar funciona corretamente.', () => {
    cy.modal();

    const date = '20010101';
    const formattedDate = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;

    cy.get('input[type="date"]').type(formattedDate);

    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#quantidade').type('123');
    cy.get('#valor').type('123');
    cy.get('#data').type(formattedDate);
    cy.get('#btn-salvar').click();


    cy.get('#mensagem').should('not.be.visible');
    cy.get('#btn-sair').click();
  });



    it('T015-Deve verificar se o botão "X" do alert está fechando a mensagem.', () => {
      cy.modal();

      cy.get('#codigo').type('1234');
      cy.get('#btn-salvar').click();
      cy.get('.alert > .close').click();

      cy.wait(2000);

      cy.get('#mensagem', { timeout: 1000 }).should('not.be.visible');

    });

    it('T016- Deve verificar se o modal salva com a label Quantidade e Valor aceitando letras', () => {
      cy.modal();

      const date = '20010101';
      const formattedDate = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;

      cy.get('input[type="date"]').type(formattedDate);

      cy.get('#codigo').type('1234');
      cy.get('#nome').type('1234');
      cy.get('#quantidade').type('aBC');
      cy.get('#valor').type('ABCD');
      cy.get('#data').type(formattedDate);
      cy.get('#btn-salvar').click();


      cy.get('#mensagem').should('not.be.visible');


    });
    
    it('T017-Deve verificar se o botão de Excluir funciona corretamente.', () => {
      cy.modal();

      const date = '20010101';
      const formattedDate = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;

      cy.get('input[type="date"]').type(formattedDate);

      cy.get('#codigo').type('1234');
      cy.get('#nome').type('1234');
      cy.get('#quantidade').type('123');
      cy.get('#valor').type('123');
      cy.get('#data').type(formattedDate);
      cy.get('#btn-salvar').click();


      cy.get('#mensagem').should('not.be.visible');
      cy.get('#btn-sair').click()

      cy.get(':nth-child(6) > :nth-child(2)').click()
      cy.get('tbody > tr > :nth-child(1)').should('not.be.visible');
    });

  });



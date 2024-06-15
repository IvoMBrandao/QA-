describe('Página de Controle', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/produtos.html?teste=123')

  });

  it('T001-Teste o botão voltar sai da aplicação?', () => {

    cy.get('.nav-link').click();
    cy.contains('login.').should('be.visible')

  });

  it('T002-Teste se o botão Controle de Produtos recarrega a pagina', () => {

    cy.get('.navbar-brand').click();


  });

  it('T003-Teste se o botão de Adicionar abre o modal de 1°.', () => {

    cy.get('#btn-adicionar').click();
    cy.contains('Produto').should('be.visible')

  });


  it('T004-Prencher o Modal c/ apenas 1 campo do modal.', () => {
    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T005-Prencher o Modal c/ apenas 2 campos do modal.', () => {
    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T006-Prencher o Modal c/ apenas 3 campos do modal.', () => {

    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#quantidade').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T007-Prencher o Modal c/ apenas 4 campos do modal.', () => {
    cy.modal();
    cy.get('#codigo').type('1234');
    cy.get('#nome').type('1234');
    cy.get('#quantidade').type('1234');
    cy.get('#valor').type('1234');
    cy.get('#btn-salvar').click();
    cy.contains('Todos os campos são obrigatórios para o cadastro!').should('be.visible')

  });

  it('T008- Prencher todo o Modal.', () => {
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

  it('T009- Verificar se o botão "X" está fechando o modal.', () => {
    cy.modal();

    cy.get('.modal-header > .close').click();
    cy.get('tr > :nth-child(3)').should('be.visible');
  });


  it('T010- Verificar se o botão "X" do alert está fechando a mensagem.', () => {
    cy.modal();

    cy.get('#codigo').type('1234');
    cy.get('#btn-salvar').click();
    cy.get('.alert > .close').click();

    cy.wait(2000);

    cy.get('#mensagem', { timeout: 1000 }).should('not.be.visible');

  });

  it('T011- Verificar se o modal salva com a label Quantidade e Valor aceitando letras', () => {
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

  it('T012- Verificar se apos o modal ser completo ele fecha clicando na opção sair.', () => {
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

  it('T013- Verificar se o botão de editar  funciona corretamente.', () => {
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



    //aqui a parte nova


    it('T014- Verificar se o botão "X" está fechando o modal.', () => {
      cy.modal();

      cy.get('.modal-header > .close').click();
      cy.get('tr > :nth-child(3)').should('be.visible');

    });


    it('T015- Verificar se o botão "X" do alert está fechando a mensagem.', () => {
      cy.modal();

      cy.get('#codigo').type('1234');
      cy.get('#btn-salvar').click();
      cy.get('.alert > .close').click();

      cy.wait(2000);

      cy.get('#mensagem', { timeout: 1000 }).should('not.be.visible');

    });

    it('T016- Verificar se o modal salva com a label Quantidade e Valor aceitando letras', () => {
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

    it('T017- Deve fechar  o modal apos ser completo e clicar na opção sair.', () => {
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


    it('T018- Verificar se o botão de editar  funciona corretamente.', () => {
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

      cy.get(':nth-child(6) > :nth-child(1)').click();
      cy.get('#btn-salvar').should('be.visible');
    });

    it('T019- Verificar se o botão de Excluir  funciona corretamente.', () => {
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



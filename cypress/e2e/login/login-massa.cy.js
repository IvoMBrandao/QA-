import { usuarios } from '../../fixtures/usuarios.json';

describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/login.html');
    });

    usuarios.forEach(usuario => {
        it('Deve preencher os campos e submeter o formulário', () => {
            cy.get('#email').clear().type(usuario.email);
            cy.get('#senha').clear().type(usuario.password);
            cy.get('#btn-entrar').click();
        });
    });
});

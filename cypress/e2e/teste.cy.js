describe('Sistema da Cartola deve', () => {
    it('Exibir os times do cartola', () => {
        cy.visit('http://localhost:5173/App')
    })
    it('Exibir os jogadores de um time', () => {
        cy.visit('http://localhost:5173/App')
        cy.get('[href="/Jogadores/275"]').click();
    })
})
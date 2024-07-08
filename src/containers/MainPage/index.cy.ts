describe('<MainPage />', () => {
  beforeEach(() => cy.visit('/'))

  it('Add todo', () => {
    cy.get('[data-cy="formTextInput"]').type('Todo1').its('length')
    cy.get('[data-cy="todoAddButton"]').click()
    cy.get('[data-cy="todoListBox"]').should('be.exist')
    cy.get('[data-cy="todoListBox"]').contains('Todos(1)')
    cy.get('[data-cy="todoItemComponent"]').should('have.length', 1)
  })

  it('Edit todo', () => {
    cy.get('[data-cy="formTextInput"]').type('Todo1').its('length')
    cy.get('[data-cy="todoAddButton"]').click()
    cy.get('[data-cy="todoItemComponent"]').its('length')
    cy.get('[data-cy="editTodoBtn"]').click()
    cy.get('[data-cy="todoAddButton"]').should('not.be.exist')
    cy.get('[data-cy="todoUpdateButton"]').should('be.exist')
    cy.get('[data-cy="formTextInput"]')
      .clear()
      .should('have.value', '')
      .type('Edit Todo1')
      .its('length')
    cy.get('[data-cy="todoUpdateButton"]').click()
  })

  it('Delete todo', () => {
    cy.get('[data-cy="formTextInput"]').type('Todo1').its('length')
    cy.get('[data-cy="todoAddButton"]').click()
    cy.get('[data-cy="removeTodoBtn"]').click()
    cy.get('[data-cy="todoListBox"]').contains('Todos(0)')
    cy.get('[data-cy="todoItemComponent"]').should('have.length', 0)
  })
})

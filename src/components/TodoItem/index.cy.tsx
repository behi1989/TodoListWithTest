import TodoItem from '.'

describe('<TodoItem />', () => {
    it('renders', () => {
        cy.mount(<TodoItem title='test' edit={() => {}} remove={() => {}} />)
    });
});
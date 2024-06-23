import TodoItem from '.'

const id = Date.now();

describe('<TodoItem />', () => {
    it('renders', () => {
        cy.mount(<TodoItem title='test' edit={() => {}} remove={() => {}} />)
    });
});
import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {

    test('status on props should be in the state', () => {
        const component = create(<ProfileStatus status='SamuraiJS' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('SamuraiJS');
    });


    test('after creation <span> with status should be dispalayed  ', () => {
        const component = create(<ProfileStatus status='SamuraiJS' />);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });

    test('after creation <span>  should contains correct status  ', () => {
        const component = create(<ProfileStatus status='SamuraiJS' />);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('SamuraiJS');
    });

    test('input should be dispalayed in EditMode instead of span ', () => {
        const component = create(<ProfileStatus status='SamuraiJS' />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('SamuraiJS');
    });
    test('callback should be called ', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='SamuraiJS' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});
import JSXSlack, { Blocks, Section } from 'jsx-slack';

export const TaskListLoading = () => {
    return JSXSlack(
        <Blocks>
            <Section>
                <p>
                    :hourglass_flowing_sand: Loading tasks...
                </p>
            </Section>
        </Blocks>
    );
};

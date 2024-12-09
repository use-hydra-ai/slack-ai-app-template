import JSXSlack, { Blocks, Section } from 'jsx-slack';

export const TaskFormLoading = () => {
    return JSXSlack(
        <Blocks>
            <Section>
                <p>
                    :hourglass_flowing_sand: Loading task form...
                </p>
            </Section>
        </Blocks>
    );
};

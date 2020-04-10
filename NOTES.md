# Test an Emotion Styled UI with Custom Jest Snapshot Serializers

You will see that in the calculator display test there is a weird class name in
the inline snapshot.

`npm install --save-dev jest-emotion`

Jest emotion is a snapshot serialiser.

the class name will now be emotion-0 and it will correctly serialise the css

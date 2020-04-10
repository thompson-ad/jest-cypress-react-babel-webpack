# Generate a Serializable Value with Jest Snapshots

When you use the `.toMatchSnapshot` assertion, a snapshots directory appears
next to the file containing the snapshots.

It takes the object that we pass to the assertion and serialises it to a string.

the test can then refer to this snapshot of data to test againt.

if you change the code you can update the snapshot aswell using `npm test -- -u`

you need to commit your snapshots to source control.

Snapshots can get very long and hard to review so you can use
`.toMatchI nlineSnapshot` the snapshot will appear inline in your code and be
updated automatically.

We now have a redundant snapshot in the snapshot directory that we can remove
using `npm test -- -u` and manually delete the directory.

Let's see how it applies to DOM Nodes.

Let's test the calculator display component:

if you console.log() the container you will see the DOM node but it's all on one
line and so you can't snapshot it as any change on the line will invalidate the
entire snapshot.

jest has built in the capability for snapshotting DOM nodes

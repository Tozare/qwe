import React from 'react';
import { Snack } from 'snack-sdk';

export const Expo = () => {

// Create Snack

    const webPreviewRef = React.useRef(null);
    const [snack] = React.useState(() =>
        new Snack({
            files: {
                'App.js': {
                    type: 'CODE',
                    contents: `
                        import * as React from 'react';
                        import { View, Text } from 'react-native';
                        
                        export default () => (
                          <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>
                              Hello Snack!
                            </Text>
                          </View>
                        );
`
                }
            },
            webPreviewRef,
        })
    );

//     const snack = new Snack({
//         files: {
//             'App.js': {
//                 type: 'CODE',
//                 contents: `
// import * as React from 'react';
// import { View, Text } from 'react-native';
//
// export default () => (
//   <View style={{flex: 1, justifyContent: 'center'}}>
//     <Text style={{fontSize: 20, textAlign: 'center'}}>
//       Hello Snack!
//     </Text>
//   </View>
// );
// `
//             }
//         }
//     });

// Make the Snack available online
    snack.setOnline(true);


    const { webPreviewURL } = snack.getState();
    return (
        <div>
            <iframe title={"Test"}
                ref={(c) => (webPreviewRef.current = c?.contentWindow ?? null)}
                src={webPreviewURL}
                allow="geolocation; camera; microphone"
            />
        </div>
    );
}
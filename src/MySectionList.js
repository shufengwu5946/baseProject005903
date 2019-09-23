import React from 'react';
import { SafeAreaView, Text, SectionList, View } from 'react-native';

const MySectionList = () => {
  return (
    <>
      <SafeAreaView>
        <SectionList
          renderItem={({ item, index, section }) => (
            <Text key={index} style={{ fontSize: 20 }}>
              {item}
            </Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={{
                backgroundColor: 'green',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 30,
                }}>
                {title}
              </Text>
            </View>
          )}
          sections={[
            {
              title: 'Title1',
              data: [
                'item1',
                'item2',
                'item1',
                'item2',
                'item1',
                'item2',
                'item1',
                'item2',
              ],
            },
            {
              title: 'Title2',
              data: [
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
                'item3',
                'item4',
              ],
            },
            {
              title: 'Title3',
              data: ['item5', 'item6', 'item5', 'item6', 'item5', 'item6'],
            },
            { title: 'Title4', data: ['item7', 'item8'] },
            {
              title: 'Title5',
              data: [
                'item9',
                'item10',
                'item9',
                'item10',
                'item9',
                'item10',
                'item9',
                'item10',
                'item9',
                'item10',
              ],
            },
            { title: 'Title6', data: ['item11', 'item12'] },
            {
              title: 'Title7',
              data: [
                'item13',
                'item14',
                'item13',
                'item14',
                'item13',
                'item14',
              ],
            },
          ]}
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled
        />
      </SafeAreaView>
    </>
  );
};

export default MySectionList;

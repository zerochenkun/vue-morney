<template>
    <Layout class-prefix="layout">
    {{recordList}}
        <Tags :data-source.sync="tags" @update:value='onUpdateTags'/>
        <Notes @update:value="onUpdateNotes" />
        <Types :value.sync="record.type" />
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import Notes from '@/components/Money/Notes.vue';
    import Tags from '@/components/Money/Tags.vue';  
    import {Component} from 'vue-property-decorator';
    import model from '@/model';

    const recordList = model.fetch();
    console.log('model: ', model);

    @Component({
        components:{Tags, Notes, Types, NumberPad},
    })
    export default class Money extends Vue {
        tags = ['衣','食','住','行'];
        recordList: RecordItem[] = recordList;
        record: RecordItem = {
            tags:[],notes:'',type:'-',amount:0
        }

        onUpdateTags(value: string[]){
            this.record.tags = value
        }
        onUpdateNotes(value: string){
            this.record.notes = value
        }
        onUpdateAmount(value: string){
            this.record.amount = parseFloat(value)
        }
        saveRecord(){
            const record2: RecordItem = model.clone(this.record);
            record2.createdAt = new Date();
            this.recordList.push(record2)
        }
    }
</script>   

<style lang="scss" scoped>
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
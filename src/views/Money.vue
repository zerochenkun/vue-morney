<template>
    <Layout class-prefix="layout">
    {{record}}
        <Tags :data-source.sync="tags" @update:value='onUpdateTags'/>
        <div class="notes">
                <FormItem field-name="备注"
                   placeholder="在这里添加备注"
                   @update:value="onUpdateNotes"/>
        </div>
        <Types :value.sync="record.type" />
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Types from '@/components/Money/Types.vue';
    import FormItem from '@/components/Money/FormItem.vue';
    import Tags from '@/components/Money/Tags.vue';  
    import {Component} from 'vue-property-decorator';

    @Component({
        components:{Tags,FormItem, Types, NumberPad},
    })
    export default class Money extends Vue {
        tags = window.tagList;
        recordList= window.recordList;
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
            window.createRecord(this.record)
        }
    }
</script>   

<style lang="scss" scoped>
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>
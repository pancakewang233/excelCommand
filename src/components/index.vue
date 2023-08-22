<template>
  <div>
    <input type="file" id="uploadExcel" multiple @change="uploadChange"/>
  </div>
</template>

<script>
import * as XLSX from 'xlsx/xlsx.mjs';
export default {
  props: {

  },
  data() {
    return {
      dataSource: null
    }
  },
  mounted(){

  },
  methods: {
    uploadChange(value){
      console.log('---waht here 111 ---', document?.querySelector('#uploadExcel')?.files);
      this.dataSource = document?.querySelector('#uploadExcel')?.files[0];
      this.readFile(this.dataSource);
    },
    readFile(file){
      let reader = new FileReader();
      reader.onload = function (e) {
          console.log('--waht here 222---', e, 'xlsx', XLSX);
          const workbook = XLSX.read(e.target.result); // 从原始数据获取工作簿
          const first_sheet_name = workbook.SheetNames[0]; // 获得第一个工作表名称
          const worksheet = workbook.Sheets[first_sheet_name]; // 获取工作表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1']); //生成json表格内容
          console.log('---waht here 333----', workbook, 'first', first_sheet_name, 'worksheet', worksheet, '第一张表', ws)
      };
      reader.readAsArrayBuffer(file);
    }
  }
}
</script>

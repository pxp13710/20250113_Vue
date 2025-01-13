<script>
export default {};
</script>

<template>
  <h3>A10 Vue Form Element</h3>
  <br />

  <form class="mb-5">
    Text Field: <span class="orange"></span><br />
    <input type="text" class="form-control" /><br />

    Number Field: <span class="orange"></span><br />
    <input type="text" class="form-control" /><br />

    Lazy Field: <span class="orange"></span><br />
    <input type="text" class="form-control" /><br />

    Radio Button: <span class="orange"></span><br />
    <input type="radio" name="gender" value="남자" />Male <br />
    <input type="radio" name="gender" value="여자" />Female <br />
    <input type="radio" name="gender" value="어린이" />Children <br />
    <br />

    Single Check: <span class="orange"></span> <br />
    <input type="checkbox" name="check" />Agree <br />
    <br />

    CheckBox: <span class="orange"></span><br />
    <input type="checkbox" value="apple" />사과 <br />
    <input type="checkbox" value="banana" />바나나 <br />
    <input type="checkbox" value="melon" />멜론 <br />
    <br />

    SelectBox: <span class="orange"></span><br />
    <select class="form-control">
      <option></option>
    </select>
    <br />

    SelectBox Multi: <span class="orange"></span><br />
    <select class="form-control" multiple>
      <option></option>
    </select>
    <br />

    TextArea: <span class="orange"></span>
    <textarea cols="50" rows="5" class="form-control"></textarea>
    <br />

    Radio Button Object Value: <span class="orange"></span><br />
    <input type="radio" name="person" />놀부 <br />
    <input type="radio" name="person" />흥부 <br />
    <input type="radio" name="person" />방자 <br />
    <br />

    Text Field: <span class="orange"></span> <br />
    <input type="text" class="form-control" /><br />

    <button type="submit">SEND</button>
  </form>
</template>

<style scoped>
.orange {
  color: orange;
}
</style>

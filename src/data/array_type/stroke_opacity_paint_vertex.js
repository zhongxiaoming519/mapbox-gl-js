// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class StrokeOpacityPaintVertexStruct extends Struct {
    a_stroke_opacity: number;
}

(Object.defineProperty: any)(
    StrokeOpacityPaintVertexStruct.prototype,
    'a_stroke_opacity',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
StrokeOpacityPaintVertexStruct.prototype.size = 4;

class StrokeOpacityPaintVertexStructArray extends StructArrayLayout {
    geta_stroke_opacity(index: number) { return this.float32[index * 1 + 0]; }
}

(StrokeOpacityPaintVertexStructArray: any).serialize = StructArray.serialize;

StrokeOpacityPaintVertexStructArray.prototype.members = [{"name":"a_stroke_opacity", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
StrokeOpacityPaintVertexStructArray.prototype.StructType = StrokeOpacityPaintVertexStruct;

register('StrokeOpacityPaintVertexStructArray', StrokeOpacityPaintVertexStructArray);

module.exports = StrokeOpacityPaintVertexStructArray;

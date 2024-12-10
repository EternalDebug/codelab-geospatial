#version 300 es
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
precision mediump float;

uniform sampler2D u_Texture;
uniform int action;

in vec2 v_TexCoord;

layout(location = 0) out vec4 o_FragColor;

void main() {
    // Mirror texture coordinates over the X axis
    vec2 texCoord = vec2(v_TexCoord.x, 1.0 - v_TexCoord.y);

    vec3 texCol = texture(u_Texture, texCoord).rgb;

    if(action == 1){
            vec3 greenColor = vec3(0.0, 1.0, 0.0);
            float alpha = 0.5; // Прозрачность
            vec3 mixedColor = mix(texCol, greenColor, alpha);
            o_FragColor = vec4(mixedColor, 1.0);
    }
    if(action ==2){
            vec3 blueColor = vec3(0.0, 0.0, 1.0);
            float alpha = 0.5; // Прозрачность
            vec3 mixedColor = mix(texCol, blueColor, alpha);
            o_FragColor = vec4(mixedColor, 1.0);
    }
    if (action ==0){
            // Установка цвета выхода
            o_FragColor = vec4(texCol, 1.0);
    }

    return;
}
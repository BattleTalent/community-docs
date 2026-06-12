---
title: shader fix for SinglePassInstanced rendering

---
### Fix

1. Modify the shader to include instancing support. Refer to the official Unity documentation: https://docs.unity3d.com/2020.3/Documentation/Manual/SinglePassInstancing.html

   Insert the following code into the `SubShader` or `Pass` block as needed:

   ```hlsl
   struct appdata
   {
       float4 vertex : POSITION;
       float2 uv : TEXCOORD0;

       UNITY_VERTEX_INPUT_INSTANCE_ID // Insert
   };

   struct v2f
   {
       float2 uv : TEXCOORD0;
       float4 vertex : SV_POSITION;

       UNITY_VERTEX_INPUT_INSTANCE_ID // Insert
       UNITY_VERTEX_OUTPUT_STEREO // Insert
   };

   v2f vert (appdata v)
   {
       v2f o;

       UNITY_SETUP_INSTANCE_ID(v); // Insert
       UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o); // Insert

       o.vertex = UnityObjectToClipPos(v.vertex);
       o.uv = v.uv;

       return o;
   }
   ```
